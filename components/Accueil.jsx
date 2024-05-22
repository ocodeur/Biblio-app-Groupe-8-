import styles from './Accueil.module.css';
import Citation from './Citation';

export default function Accueil() {
    return (
        <>
            <Citation auteur='CANADATOURS.CA'>
                Bienvenue sur CanadaTours, votre guide ultime pour découvrir les merveilles touristiques et culturelles des provinces canadiennes.
                Que vous soyez un voyageur local ou international,
                notre mission est de vous fournir une plateforme informative et engageante qui met en valeur la richesse et la diversité des 
                attractions canadiennes. Chez CanadaTours, nous croyons que chaque coin du Canada a quelque chose d'unique à offrir. 
            </Citation>
            <div className={styles.imageContainer}>
                <img src="/image1.webp" alt="Canada Landscape" className={styles.image} />
            </div>
            <div className={styles.welcome}>
                "Welcome to CANADATOURS"
            </div>
            <div className={styles.content}>
                <p>
                    <strong>Ontario</strong> est la province la plus peuplée du Canada, abritant des villes dynamiques comme Toronto, la capitale économique du pays, et Ottawa, la capitale nationale. L'Ontario est réputé pour ses attractions culturelles, telles que le Musée royal de l'Ontario et la Galerie d'art de l'Ontario, ainsi que pour ses merveilles naturelles comme les chutes du Niagara, l'un des sites les plus emblématiques au monde. Avec ses parcs provinciaux étendus, ses lacs pittoresques et ses régions viticoles renommées, l'Ontario offre une diversité d'expériences à ses visiteurs.
                </p>
                <p>
                    <strong>Québec</strong> est la plus grande province du Canada en termes de superficie et est la seule à avoir une majorité de francophones. Connue pour son riche patrimoine culturel et historique, le Québec attire des millions de visiteurs chaque année avec ses festivals animés, sa cuisine délicieuse et son architecture européenne. La ville de Québec, avec ses rues pavées et ses fortifications historiques, est un site du patrimoine mondial de l'UNESCO, tandis que Montréal, la plus grande ville de la province, est célèbre pour sa scène artistique vibrante et son ambiance cosmopolite. Les paysages naturels du Québec, des Laurentides aux rives du Saint-Laurent, offrent des possibilités infinies pour les amateurs de plein air.
                </p>
            </div>
            
        </>
    );
}
