import React, {Component, Fragment} from 'react';
import ExplPart1 from './ExplicationM1';
import ExplPart2 from './ExplicationM2';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class ExplicationManga extends Component{
    state={
        manga:[
            {titre: "Solo Leveling", alterName: "나 혼자만 레벨업", status: "En cours", origine: "Corée", style: "Action, Aventure, Fantasy, Shonen", auteur: "Jang Sung-Lak, Gee So-Lyung", description: "Il y a 10 ans, après l'ouverture de la 'Porte' qui reliait le monde réel au monde des monstres, des gens ordinaires et ordinaires ont reçu le pouvoir de chasser des monstres dans la Porte. Ils sont connus sous le nom de 'Chasseurs'. Cependant, tous les chasseurs ne sont pas puissants. Je m'appelle Sung Jin-Woo, un chasseur de rang E. Je suis quelqu'un qui doit risquer sa vie dans le plus petit des donjons, le 'plus faible du monde'. N'ayant aucune compétence à montrer, j'ai à peine gagné l'argent nécessaire en me battant dans des donjons de bas niveau... au moins jusqu'à ce que je trouve un donjon caché avec la difficulté la plus dure dans les donjons de rang D ! Finalement, alors que j'acceptais la mort, j'ai soudain reçu un étrange pouvoir, un carnet de quête que je suis le seul à pouvoir voir, un secret de mise à niveau que moi seul connais ! Si je m'entraînais en accord avec mes quêtes et chassais des monstres, mon niveau augmenterait. Passant du chasseur le plus faible au chasseur de rang S le plus fort !"},
            {titre: "Shingeki no Kyojin", alterName: "进击的巨人, 進撃の巨人, Advancing Giants, Attack on Titan, Shingeki no Kyodai", status: "En cours", origine: "Japon", style: "Drame, Fantasy, Horreur, Mystère, Supernaturel, Tragedie, Action", auteur: "Hajime Isayama", description: "Il y a plus d'un siècle de cela, les Hommes vivaient en paix. Mais, un jour l'Humanité a presque été entièrement décimée par des êtres gigantesques, les Titans. Personne ne sait d'où ils viennent ! Une seule chose est sûre, ils semblent animer par un unique but : dévorer les humains, un par un ! Depuis, les derniers rescapés ont bâti une place forte, une cité cernée de hautes murailles au sein de laquelle vivent aujourd'hui leurs descendants. Ignorants tout du monde extérieur, ils se pensent au moins à l'abri des Titans ! Mais leurs vies basculent le jour où surgit un Titan démesuré…"},
            {titre: "Psyren", alterName: "サイレン, ＰＳＹЯＥＮ, PSYREN-サイレン-, ســايــرن", status: "En cours", origine: "Japon", style: "Action, Shonen, Aventure, Fantasy, Psychologique, Supernaturel", auteur: "Iwashiro Toshiaki", description: "Yoshina Ageha est un lycéen qui propose d'aider les gens à résoudre leurs problèmes pour 10 000 yens. Il prendra soin de vos harceleurs, retrouvera votre animal perdu, tout ce que vous voudrez. Un jour, alors qu'il rentre chez lui, un téléphone public à proximité sonne et il le décroche. La seule chose qu'il entend cependant, c'est que sa propre voix résonne. Après avoir trouvé une mystérieuse carte de téléphone avec le mot «Psyren» imprimé dessus, sa vie change soudainement alors qu'il est entraîné dans un nouveau monde fou."},
            {titre: "Tower of God", alterName: "신의 탑", status: "En cours", origine: "Corée", style: "Action, Drame, Fantasy, Shonen, Mystère", auteur:"Slave In Utero", description: "Que désires-tu? Fortune? Gloire? Puissance? Vengeance? Ou quelque chose qui surpasse tous les autres? Tout ce que vous désirez, «c'est ici». Tour de Dieu."},
            {titre: "Tales of Demons and Gods", alterName: "妖神记", status: "En cours", origine: "Chine", style: "Action, Aventure, Arts Martiaux, Shonen, Fantasy", auteur: "Mad Snail", description: "Nie Li, le plus fort des spirites démoniaques de sa vie passée, au sommet du monde martial, cependant, il a perdu la vie au cours de la bataille avec l'empereur Sage et la bête classée six divinités, son âme renaît alors dans le temps à l'époque où il est toujours 13. Bien qu'il soit le plus faible de sa classe avec le talent le plus bas dans le royaume de l'âme rouge seulement, mais avec l'aide des vastes connaissances qu'il a accumulées de sa vie précédente, il s'est entraîné plus vite que n'importe qui. Essayer de protéger la ville qui dans un futur proche a été assaillie par une bête et a fini par être détruite, ainsi que de protéger son amant, ses amis et sa famille décédés par l'assaut de la bête. Et de détruire la Famille Sacrée qui a abandonné son devoir et a trahi la ville dans sa vie passée."}
        ],
        soloLeveling: [
            "Solo Leveling", "나 혼자만 레벨업", "En cours", "Corée", "Action, Aventure, Fantasy, Shonen", "Jang Sung-Lak, Gee So-Lyung", "Il y a 10 ans, après l'ouverture de la 'Porte' qui reliait le monde réel au monde des monstres, des gens ordinaires et ordinaires ont reçu le pouvoir de chasser des monstres dans la Porte. Ils sont connus sous le nom de 'Chasseurs'. Cependant, tous les chasseurs ne sont pas puissants. Je m'appelle Sung Jin-Woo, un chasseur de rang E. Je suis quelqu'un qui doit risquer sa vie dans le plus petit des donjons, le 'plus faible du monde'. N'ayant aucune compétence à montrer, j'ai à peine gagné l'argent nécessaire en me battant dans des donjons de bas niveau... au moins jusqu'à ce que je trouve un donjon caché avec la difficulté la plus dure dans les donjons de rang D ! Finalement, alors que j'acceptais la mort, j'ai soudain reçu un étrange pouvoir, un carnet de quête que je suis le seul à pouvoir voir, un secret de mise à niveau que moi seul connais ! Si je m'entraînais en accord avec mes quêtes et chassais des monstres, mon niveau augmenterait. Passant du chasseur le plus faible au chasseur de rang S le plus fort !"
        ],
        Shingeki: [
            "Shingeki no Kyojin", "进击的巨人, 進撃の巨人, Advancing Giants, Attack on Titan, Shingeki no Kyodai", "En cours", "Japon", "Drame, Fantasy, Horreur, Mystère, Supernaturel, Tragedie, Action", "Hajime Isayama", "Il y a plus d'un siècle de cela, les Hommes vivaient en paix. Mais, un jour l'Humanité a presque été entièrement décimée par des êtres gigantesques, les Titans. Personne ne sait d'où ils viennent ! Une seule chose est sûre, ils semblent animer par un unique but : dévorer les humains, un par un ! Depuis, les derniers rescapés ont bâti une place forte, une cité cernée de hautes murailles au sein de laquelle vivent aujourd'hui leurs descendants. Ignorants tout du monde extérieur, ils se pensent au moins à l'abri des Titans ! Mais leurs vies basculent le jour où surgit un Titan démesuré…"
        ],
        colonneTitre: [
            "Titre", "Nom alternatif", "Status", "Origine", "Style", "Auteur", "Description"
        ]
    };
    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-2">
                        {
                            this.state.colonneTitre.map((elem) => {
                                return(
                                    <ExplPart1 titre={elem}/>
                                );
                            })
                        }
                    </div>
                    <div className="col-10 rounded">
                        {
                            this.state.soloLeveling.map((elem) => {
                                return(
                                    <ExplPart2 content={elem}/>
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        );
    };
};

export default ExplicationManga;