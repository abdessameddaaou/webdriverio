/**
 * Dans cette classe on écrit des fonction qui se recommence
 * les fonctions qui se recommonce dans cette classe ce n'est pas des fonction de vérification. C'est des fonctions sui nous aide à naviguer par exemple
 * cette classe n'est pas spécifique à un cas de tests précis
 */

import Connexion from "./Connexion";

class Commande
{
    async SeConnecter()
    {
        await browser.url("https://www.saucedemo.com/")
        await Connexion.typeUsername('standard_user')
        await Connexion.typePassword('secret_sauce')
        await Connexion.LoginBtn.click()
    }
}

export default new  Commande()
