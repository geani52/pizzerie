import Margherita from "../Images/produse/margherita.png";
import Salami from "../Images/produse/salami.png";
import Quattro from "../Images/produse/quattro.png";
import Diavola from "../Images/produse/diavola.png";
import Funghi from "../Images/produse/funghi.png";
import Hawaiana from "../Images/produse/hawaiana.png";
import Papanasi from "../Images/produse/papanasi.png";
import Clatite from "../Images/produse/clatite.png";
import Gogosi from "../Images/produse/gogosi.png";
import Placinta from "../Images/produse/placinta.png";
import Rulada from "../Images/produse/rulada.png";
import Diplomat from "../Images/produse/diplomat.png";
import StrMilkshake from "../Images/produse/strMilkshake.png";
import Mirinda from "../Images/produse/mirinda.png";
import SevenUP from "../Images/produse/7up.png";
import Pepsi from "../Images/produse/pepsi.png";
import Lipton from "../Images/produse/lipton.png";
import SosPicant from "../Images/produse/sosPicant.png";
import SosDulce from "../Images/produse/sosDulce.png";
import SosMaioneza from "../Images/produse/sosMaioneza.png";
import SosMustar from "../Images/produse/sosMustar.png";
import SosUsturoi from "../Images/produse/sosUsturoi.png";
import { ProduseProps, SosProps } from "../pages/page/catalog_pizza";

export class AppHelpers{
    static produse:ProduseProps[] = [
        {
            id: "0",
            name: "Pizza Margherita",
            description: "Sos de rosii, Mozzarella, Oregano, Busuioc, Rucola",
            price: "21,00 lei – 40,00 lei",
            img: Margherita,
            pretPerDimensiune: [21,27,40],
            dimensiunePizza: -1,
            selectPret: 21,
            qty: 1
        },
        {
            id: "1",
            name: "Pizza Salami",
            description: "Sos de rosii, salam, ulei masline, mozzarella",
            price: "23,00 lei – 45,00 lei",
            img: Salami,
            pretPerDimensiune: [23,30,45],
            dimensiunePizza: -1,
            selectPret: 23,
            qty: 1
        },
        {
            id: "2",
            name: "Pizza Quattro Formaggi",
            description: "Sos de rosi, Mozzarella, Gorgonzola, Brie, Parmesan",
            price: "26,00 lei – 51,00 lei",
            img: Quattro,
            pretPerDimensiune: [26,32,51],
            dimensiunePizza: -1,
            selectPret: 26,
            qty: 1
        },
        {
            id: "3",
            name: "Pizza Diavola",
            description: "Sos de rosii, Mozzarella, Salam picant, Carnaciori picanti, Ardei iute",
            price: "24,00 lei – 47,00 lei",
            img: Diavola,
            pretPerDimensiune: [24,30,47],
            dimensiunePizza: -1,
            selectPret: 24,
            qty: 1
        },
        {
            id: "4",
            name: "Pizza Funghi",
            description: "Sos de rosii, Mozzarella, Ciuperci, Oregano",
            price: "23,00 lei – 43,00 lei",
            img: Funghi,
            pretPerDimensiune: [23,30,45],
            dimensiunePizza: -1,
            selectPret: 23,
            qty: 1
        },
        {
            id: "5",
            name: "Pizza Hawaiana",
            description: "Sos de rosii, Mozzarella, Sunca, Ananas",
            price: "23,00 lei – 43,00 lei",
            img: Hawaiana,
            pretPerDimensiune: [23,28,43],
            dimensiunePizza: -1,
            selectPret: 23,
            qty: 1
        }
    ]

    static sos:SosProps[] = [
        {
            id: "7",
            name: "Sos de rosii dulce",
            cantitate: "40g",
            price: 3,
            qty: 0
        },
        {
            id: "8",
            name: "Sos de rosii picant",
            cantitate: "40g",
            price: 3,
            qty: 0
        },
        {
            id: "9",
            name: "Maioneza dulce",
            cantitate: "40g",
            price: 5,
            qty: 0
        },
        {
            id: "100",
            name: "Mustar dulce",
            cantitate: "40g",
            price: 4,
            qty: 0
        },
        {
            id: "110",
            name: "Sos de usturoi",
            cantitate: "40g",
            price: 4,
            qty: 0
        }
    ]

    static legume:SosProps[] = [
        {
            id: "10",
            name: "Argei gras",
            cantitate: "40g",
            price: 4,
            qty: 0
        },
        {
            id: "11",
            name: "Rosii",
            cantitate: "40g",
            price: 4,
            qty: 0
        },
        {
            id: "12",
            name: "Ciuperci",
            cantitate: "40g",
            price: 4,
            qty: 0
        },
        {
            id: "13",
            name: "Ardei iute",
            cantitate: "40g",
            price: 4,
            qty: 0
        },
        {
            id: "14",
            name: "Masline",
            cantitate: "40g",
            price: 4,
            qty: 0
        },
        {
            id: "15",
            name: "Ananas",
            cantitate: "40g",
            price: 4,
            qty: 0
        },
    ]

    static carne:SosProps[] = [
        {
            id: "16",
            name: "Piept de pui",
            cantitate: "40g",
            price: 6,
            qty: 0
        },
        {
            id: "17",
            name: "Sunca",
            cantitate: "40g",
            price: 6,
            qty: 0
        },
        {
            id: "18",
            name: "Bacon",
            cantitate: "40g",
            price: 6,
            qty: 0
        },
        {
            id: "19",
            name: "Ton",
            cantitate: "40g",
            price: 7,
            qty: 0
        },
        {
            id: "20",
            name: "Somon afumat",
            cantitate: "40g",
            price: 7,
            qty: 0
        },
        {
            id: "21",
            name: "Carpaccio",
            cantitate: "40g",
            price: 7,
            qty: 0
        },
    ]

    static branzeturi:SosProps[] = [
        {
            id: "22",
            name: "Mozzarella",
            cantitate: "40g",
            price: 6,
            qty: 0
        },
        {
            id: "23",
            name: "Brie",
            cantitate: "40g",
            price: 6,
            qty: 0
        },
        {
            id: "24",
            name: "Gorgonzola",
            cantitate: "40g",
            price: 7,
            qty: 0
        },
        {
            id: "25",
            name: "Parmesan",
            cantitate: "40g",
            price: 7,
            qty: 0
        },
    ]

    static desert:ProduseProps[] = [
        {
            id: "26",
            name: "Papanas cu dulceata si smantana (2buc)",
            description: "Desert: faina, oua, branza, zahar vanilinat, smantana, dulceata",
            price: "15.00 lei",
            img: Papanasi,
            pretPerDimensiune: [15],
            dimensiunePizza: -1,
            selectPret: 15,
            qty: 1
        },
        {
            id: "27",
            name: "Clatite cu ciocolata (150 g)",
            description: "Desert: faina, oua lapte, apa minerala, mirodenii, ciocolata.",
            price: "12.00 lei",
            img: Clatite,
            pretPerDimensiune: [12],
            dimensiunePizza: -1,
            selectPret: 12,
            qty: 1
        },
        {
            id: "28",
            name: "Gogosi clasice (12 buc)",
            description: "Desert: unt, lapte, ou, zahăr, făină, drojdie",
            price: "43.00 lei",
            img: Gogosi,
            pretPerDimensiune: [43],
            dimensiunePizza: 0,
            selectPret: 43,
            qty: 1
        },
        {
            id: "29",
            name: "Placinta cu branza (500g)",
            description: "Desert: foaie de plăcintă frământată de casă, brânză dulce, zahăr, ou",
            price: "34.00 lei",
            img: Placinta,
            pretPerDimensiune: [34],
            dimensiunePizza: 0,
            selectPret: 34,
            qty: 1
        },
        {
            id: "30",
            name: "Rulada cu biscuiti (1 buc)",
            description: "Desert:  biscuiti, cacao, lapte, unt",
            price: "38.00 lei",
            img: Rulada,
            pretPerDimensiune: [38],
            dimensiunePizza: 0,
            selectPret: 38,
            qty: 1
        },
        {
            id: "31",
            name: "Tort Diplomat",
            description: "Desert: pandispan alb insiropat, sarlota de fructe exotice, frisca, fructe",
            price: "115 lei",
            img: Diplomat,
            pretPerDimensiune: [115],
            dimensiunePizza: 0,
            selectPret: 115,
            qty: 1
        }
    ]

    static bauturi:ProduseProps[] = [
        {
            id: "32",
            name: "Milkshake (350g)",
            description: "Bautura: capsuni",
            price: "12.00 lei",
            img: StrMilkshake,
            pretPerDimensiune: [12],
            dimensiunePizza: 0,
            selectPret: 12,
            qty: 1
        },
        {
            id: "33",
            name: "Mirinda (0.25ml)",
            description: "Bautura: prtocale",
            price: "4.00 lei",
            img: Mirinda,
            pretPerDimensiune: [4],
            dimensiunePizza: -1,
            selectPret: 4,
            qty: 1
        },
        {
            id: "34",
            name: "7UP (0.25ml)",
            description: "Bautura: lamaie",
            price: "4.00 lei",
            img: SevenUP,
            pretPerDimensiune: [4],
            dimensiunePizza: -1,
            selectPret: 4,
            qty: 1
        },
        {
            id: "35",
            name: "Pepsi (0.25ml)",
            description: "Bautura",
            price: "4.00 lei",
            img: Pepsi,
            pretPerDimensiune: [4],
            dimensiunePizza: -1,
            selectPret: 4,
            qty: 1
        },
        {
            id: "36",
            name: "Lipton (0.25ml)",
            description: "Bautura: piersica",
            price: "4.00 lei",
            img: Lipton,
            pretPerDimensiune: [4],
            dimensiunePizza: -1,
            selectPret: 4,
            qty: 1
        },
    ]

    static sosuri:ProduseProps[] = [
        {
            id: "37",
            name: "Sos de rosii (40g)",
            description: "Sos: Picant",
            price: "3.00 lei",
            img: SosPicant,
            pretPerDimensiune: [3],
            dimensiunePizza: -1,
            selectPret: 3,
            qty: 1
        },
        {
            id: "38",
            name: "Sos de rosii (40g)",
            description: "Sos: dulce",
            price: "3.00 lei",
            img: SosDulce,
            pretPerDimensiune: [3],
            dimensiunePizza: -1,
            selectPret: 3,
            qty: 1
        },
        {
            id: "39",
            name: "Sos de maioneza (40g)",
            description: "Sos: dulce",
            price: "4.00 lei",
            img: SosMaioneza,
            pretPerDimensiune: [4],
            dimensiunePizza: -1,
            selectPret: 4,
            qty: 1
        },
        {
            id: "40",
            name: "Mustar (40g)",
            description: "Sos: dulce",
            price: "4.00 lei",
            img: SosMustar,
            pretPerDimensiune: [4],
            dimensiunePizza: -1,
            selectPret: 4,
            qty: 1
        },
        {
            id: "41",
            name: "Sos de usturoi (40g)",
            description: "Sos: picant",
            price: "4.00 lei",
            img: SosUsturoi,
            pretPerDimensiune: [4],
            dimensiunePizza: -1,
            selectPret: 4,
            qty: 1
        },
    ]
}