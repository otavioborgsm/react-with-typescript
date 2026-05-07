import React from "react";
import Input from "../../basic-tsx/Input";

interface Order {
  id: string;
  nome: string;
  preco: number;
  status: Status;
  pagamento: Pagamento;
  parcelas: null | number;
  data: string;
}

type Pagamento = "boleto" | "cartao" | "pix";
type Status = "pago" | "processando" | "falha";

async function importData(start: string, end: string): Promise<Order[] | null> {
  try {
    const response = await fetch(
      `https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result as Order[];
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

const UseStateTest = () => {
  const [data, setData] = React.useState<null | Order[]>(null);
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  async function fetchData() {
    const data = await importData(start, end);
    setData(data);
  }

  React.useEffect(() => {
    if (start === "" || end === "") {
      setData(null);
      console.log("Datas não informadas");
      return;
    }
    console.log("Iniciou buscas");
    fetchData();
  }, [start, end]);

  return (
    <>
      <h2>Busca de Pedidos (Atividade Use State)</h2>
      <Input id="start" label="Início" type="date" setState={setStart} />
      <Input id="end" label="Final" type="date" setState={setEnd} />
      {data !== null && (
        <>
          <h2>Resultado:</h2>

          {data.map((it) => (
            <p key={it.nome}>
              <b>{it.nome}</b>: {it.status}
            </p>
          ))}
        </>
      )}
    </>
  );
};

export default UseStateTest;
