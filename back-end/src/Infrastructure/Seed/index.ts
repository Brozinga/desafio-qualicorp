import "../../Environment";
import "reflect-metadata";
import DatabaseContext from '../Context/DatabaseClients';
import CLient from '../../Domain/Entities/Client';
import ClientRepository from '../Repository/ClientRepository';


async function Seed() {
    console.log("========== Iniciando a injeção de dados! ==========");

    const base = new DatabaseContext();
    const repository = new ClientRepository(base);

    let list: CLient[] = [];

    list.push(new CLient(null, "Fernando Moraes", new Date(1994, 6, 8), "fernando.moraes@outraempresa.com.br", true))
    list.push(new CLient(null, "Larissa Aquino", new Date(1997, 11, 10), "larissa@gmail.com", true))
    list.push(new CLient(null, "Filipe Silva", new Date(1994, 2, 18), "filipe@empresa-um.com", true))
    list.push(new CLient(null, "José da Costa Neto", new Date(1984, 3, 20), "jose.tome@empresateste.com.br", true))
    list.push(new CLient(null, "Luiz António Ferraz", new Date(1989, 8, 2), "lferraz@yahoo.com.br", true))
    list.push(new CLient(null, "Henrique Lima", new Date(1971, 1, 24), "hr-lima12@outlook.com", false))
    list.push(new CLient(null, "Ricardo Amorin", new Date(1964, 2, 20), "ricardo-amorin@empresa123.com", true))

    for (let i = 0; i < list.length; i++) {
        await repository.Insert(list[i]);
        console.log(`DADOS INSERIDOS: ${i}`)
    }

    console.log("========== Processo concluído! ==========");
    process.exit(0);
}

Seed();