import React, {Component, Fragment} from 'react';
import ExplicationManga from './manga/ExplicationManga';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

class Manga extends Component {
    state = {
        image: [
            "./img/solo-leveling.jpg", "./img/psyren.jpg", "./img/SnK.jpg", "./img/TODAG.jpg", "./img/Tower-of-God.png", "./img/death-note.jpg", "./img/Hajime.jpg", "./img/demon_slayer.png", "./img/tokyo-ghoul.jpg", "./img/satan666.jpg", "./img/boruto.jpg",
        ],
        titre: [
            "Solo Leveling", "Psyren", "Singeki no Kyojin", "Tales of Demons and Gods", "Tower of God", "Death Note", "Hajime no Ippo", "Demon Slayer", "Tokyo Ghoul", "Satan 666", "Boruto"
        ],
        colonneTitre: [
            "Titre", "Nom alternatif", "Status", "Origine", "Style", "Auteur", "Description"
        ],
        manga: [
            [
                "Solo Leveling", "나 혼자만 레벨업", "En cours", "Corée", "Action, Aventure, Fantasy, Shonen", "Jang Sung-Lak, Gee So-Lyung", "Il y a 10 ans, après l'ouverture de la 'Porte' qui reliait le monde réel au monde des monstres, des gens ordinaires et ordinaires ont reçu le pouvoir de chasser des monstres dans la Porte. Ils sont connus sous le nom de 'Chasseurs'. Cependant, tous les chasseurs ne sont pas puissants. Je m'appelle Sung Jin-Woo, un chasseur de rang E. Je suis quelqu'un qui doit risquer sa vie dans le plus petit des donjons, le 'plus faible du monde'. N'ayant aucune compétence à montrer, j'ai à peine gagné l'argent nécessaire en me battant dans des donjons de bas niveau... au moins jusqu'à ce que je trouve un donjon caché avec la difficulté la plus dure dans les donjons de rang D ! Finalement, alors que j'acceptais la mort, j'ai soudain reçu un étrange pouvoir, un carnet de quête que je suis le seul à pouvoir voir, un secret de mise à niveau que moi seul connais ! Si je m'entraînais en accord avec mes quêtes et chassais des monstres, mon niveau augmenterait. Passant du chasseur le plus faible au chasseur de rang S le plus fort !"
            ],
            [
                "Psyren", "サイレン, ＰＳＹЯＥＮ, PSYREN-サイレン-, ســايــرن", "En cours", "Japon", "Action, Shonen, Aventure, Fantasy, Psychologique, Supernaturel", "Iwashiro Toshiaki", "Yoshina Ageha est un lycéen qui propose d'aider les gens à résoudre leurs problèmes pour 10 000 yens. Il prendra soin de vos harceleurs, retrouvera votre animal perdu, tout ce que vous voudrez. Un jour, alors qu'il rentre chez lui, un téléphone public à proximité sonne et il le décroche. La seule chose qu'il entend cependant, c'est que sa propre voix résonne. Après avoir trouvé une mystérieuse carte de téléphone avec le mot «Psyren» imprimé dessus, sa vie change soudainement alors qu'il est entraîné dans un nouveau monde fou."
            ],
            [
                "Shingeki no Kyojin", "进击的巨人, 進撃の巨人, Advancing Giants, Attack on Titan, Shingeki no Kyodai", "En cours", "Japon", "Drame, Fantasy, Horreur, Mystère, Supernaturel, Tragedie, Action", "Hajime Isayama", "Il y a plus d'un siècle de cela, les Hommes vivaient en paix. Mais, un jour l'Humanité a presque été entièrement décimée par des êtres gigantesques, les Titans. Personne ne sait d'où ils viennent ! Une seule chose est sûre, ils semblent animer par un unique but : dévorer les humains, un par un ! Depuis, les derniers rescapés ont bâti une place forte, une cité cernée de hautes murailles au sein de laquelle vivent aujourd'hui leurs descendants. Ignorants tout du monde extérieur, ils se pensent au moins à l'abri des Titans ! Mais leurs vies basculent le jour où surgit un Titan démesuré…"
            ],
            [
                "Tales of Demons and Gods", "妖神记", "En cours", "Chine", "Action, Aventure, Arts Martiaux, Shonen, Fantasy", "Mad Snail", "Nie Li, le plus fort des spirites démoniaques de sa vie passée, au sommet du monde martial, cependant, il a perdu la vie au cours de la bataille avec l'empereur Sage et la bête classée six divinités, son âme renaît alors dans le temps à l'époque où il est toujours 13. Bien qu'il soit le plus faible de sa classe avec le talent le plus bas dans le royaume de l'âme rouge seulement, mais avec l'aide des vastes connaissances qu'il a accumulées de sa vie précédente, il s'est entraîné plus vite que n'importe qui. Essayer de protéger la ville qui dans un futur proche a été assaillie par une bête et a fini par être détruite, ainsi que de protéger son amant, ses amis et sa famille décédés par l'assaut de la bête. Et de détruire la Famille Sacrée qui a abandonné son devoir et a trahi la ville dans sa vie passée."
            ],
            [
                "Tower of God", "신의 탑", "En cours", "Corée", "Action, Drame, Fantasy, Shonen, Mystère", "Slave In Utero", "Que désires-tu? Fortune? Gloire? Puissance? Vengeance? Ou quelque chose qui surpasse tous les autres? Tout ce que vous désirez, «c'est ici». Tour de Dieu."
            ],
            [
                "Death Note", "-", "Fini", "Japon", "Drame, Mystère, Psychologique, Supernaturel, Tragedie", "Ohba Tsugumi", "Un élève de 12e surperformant, Yagami Light est un jeune homme en herbe qui semble voué au succès. Malheureusement, ses habitudes quotidiennes portaient son incroyable intelligence - Alors, quand un étrange cahier noir tombe du ciel pendant son cours, il ne tarde pas à le prendre pour lui-même. Dans sa chambre, il découvre, à son horreur / fascination, que le Death Note est réel et appartient à Ryuk, un Shinigami (Death God)."
            ],
            [
                "Hajime no Ippo", "Иппо, Первый Шаг, はじめの一歩, 第一神拳, Fight Ippo !!, Fighting Spirit, Hajime no Ippo. The Fighting!, HnI, Ippo", "En cours", "Japon", "Action, Sport, Comédie, Shonen", "Morikawa Jyoji", "Tout au long de son enfance, Makunouchi Ippo a toujours été choisi par ses camarades de classe. De longues heures à aider sa mère à gérer leur entreprise familiale, un magasin de bateaux de pêche, l'ont laissé sans le temps de se faire des amis, et il reste donc un solitaire introverti, voué à être battu jour après jour. Bien qu'il déteste être victime d'intimidation, il se déteste encore plus de ne pas pouvoir se battre contre ses bourreaux. 'Qu'est-ce que ça fait d'être fort?' se demande-t-il en regardant son poing fermé. 'Je veux être fort' Sa rencontre avec Takamura Mamoru, un boxeur professionnel, conduit à la découverte d'un punch à la dynamite qui ouvre la porte à un tout nouveau monde où ce rêve peut devenir réalité. Au Kamogawa Gym, Ippo s'entraîne désormais avec l'ambition de devenir un boxeur professionnel et de découvrir ce que signifie être fort."
            ],
            [
                "Demon Slayer", "Blade of Demon, Destruction Demon Slayer Demon Slayer: Kimetsu no Yaiba", "En cours", "Japon", "Action, Drame, Fantastique, Historique", "Gotouge Koyoharu", "Tanjiro est le fils aîné d'une famille qui a perdu son père. Tanjiro se rend un jour dans une autre ville pour vendre du charbon de bois, mais finit par passer la nuit chez quelqu'un d'autre au lieu de rentrer chez lui à cause d'une rumeur sur un démon qui traque une montagne voisine la nuit. Quand il rentre chez lui le lendemain, une tragédie l'attend."
            ],
            [
                "Tokyo Ghoul", "Tokyo Kushu, Tokyo Kusyu, Toukyou Kushu (Ghoul)", "Fini", "Japon", "Horreur, Mystère, Psychologique, Supernaturel", "Ishida Sui", "Des meurtres étranges se produisent à Tokyo. En raison de preuves liquides sur les lieux, la police conclut que les attaques sont le résultat de goules de type «mangeur». Kaneki et Hide, copains d'université, ont eu l'idée que les goules imitent les humains, c'est pourquoi ils n'en ont jamais vu. Ils ne savaient pas que leur théorie pourrait très bien devenir réalité."
            ],
            [
                "Satan 666", "666satan, O-parts Hunter", "Fini", "Japon", "Action, Aventure, Comédie, Fantasy, Shonen, Tragédie", "Kishimoto Seishi", "Ruby Crescent est une fille ordinaire, qui aime sortir avec des garçons et faire du shopping. Sa vie change radicalement lorsque son père meurt et elle devient un chasseur de trésors comme lui. Son objectif est de trouver des O-Parts - des objets magiques cachés sous le sol qui confèrent aux gens des pouvoirs surhumains et ne peuvent être utilisés que par un O.P.T. (O-Part Tactician) ou descendant de l'Ange et du Diable. Elle rencontre bientôt un garçon mystérieux nommé Jio qui, en raison d'un passé sombre et solitaire, cherche à conquérir le monde. Jio lui est hostile au début, mais finit par voyager avec Ruby comme garde du corps. Lorsque Ruby est attaqué par un O.P.T. prétendant être Satan, Jio se précipite à son secours et une bataille se produit. Au début, ils sont du côté des perdants, mais Jio libère son vrai pouvoir et se révèle être non seulement un O.P.T., mais le vrai Satan. Ainsi, les deux continuent à voyager ensemble dans l'espoir de révéler leur passé."
            ], 
            [
                "Boruto", "BORUTO-ボルト- -NARUTO NEXT GENERATIONS-", "En cours", "Japon", "Action, Shonen, Aventure, Comédie, Arts-Martiaux", "Kishimoto Masashi", "Naruto était un jeune shinobi avec un talent incorrigible pour le mal. Il a réalisé son rêve de devenir le plus grand ninja du village et son visage se trouve au sommet du monument Hokage. Mais ce n'est pas son histoire ... Une nouvelle génération de ninja est prête à monter sur scène, dirigée par le propre fils de Naruto, Boruto!"
            ]
        ]
    }
    render(){
        return(
            <Fragment>
                {/* Section manga */}
                <section className="container my-4">
                    {/* Solo Leveling */}
                    <ExplicationManga titreManga={this.state.titre[0]} imageManga={this.state.image[0]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[0]}/>
                    {/* Solo Leveling */}

                    {/* Psyren */}
                    <ExplicationManga titreManga={this.state.titre[1]} imageManga={this.state.image[1]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[1]}/>
                    {/* Psyren */}

                    {/* SnK */}
                    <ExplicationManga titreManga={this.state.titre[2]} imageManga={this.state.image[2]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[2]}/>
                    {/* SnK */}

                    {/* TODAG */}
                    <ExplicationManga titreManga={this.state.titre[3]} imageManga={this.state.image[3]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[3]}/>
                    {/* TODAG */}

                    {/* ToG */}
                    <ExplicationManga titreManga={this.state.titre[4]} imageManga={this.state.image[4]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[4]}/>
                    {/* ToG */}

                    {/* ToG */}
                    <ExplicationManga titreManga={this.state.titre[5]} imageManga={this.state.image[5]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[5]}/>
                    {/* ToG */}

                    {/* ToG */}
                    <ExplicationManga titreManga={this.state.titre[6]} imageManga={this.state.image[6]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[6]}/>
                    {/* ToG */}

                    {/* ToG */}
                    <ExplicationManga titreManga={this.state.titre[7]} imageManga={this.state.image[7]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[7]}/>
                    {/* ToG */}

                    {/* ToG */}
                    <ExplicationManga titreManga={this.state.titre[8]} imageManga={this.state.image[8]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[8]}/>
                    {/* ToG */}

                    {/* ToG */}
                    <ExplicationManga titreManga={this.state.titre[9]} imageManga={this.state.image[9]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[9]}/>
                    {/* ToG */}

                    {/* ToG */}
                    <ExplicationManga titreManga={this.state.titre[10]} imageManga={this.state.image[10]} colonneTitre={this.state.colonneTitre} manga={this.state.manga[10]}/>
                    {/* ToG */}
                </section>
                {/* Section manga */}
            </Fragment>
        );
    };
};

export default Manga;