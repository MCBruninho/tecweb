import Cartao from "../componentes/Cartao";
import Sidebar from "../componentes/Sidebar";
import Topbar from "../componentes/Topbar";

function Dashboard() {
  return <div>
    <Sidebar />
    <main>
        <Topbar />
        <section>
            <h2>Bem-vindo ao Portal do Aluno</h2>
            <Cartao />
            <Cartao />
            <Cartao />
        </section>
    </main>
  </div>
}

export default Dashboard;