import Connexion from "../Page Object/Connexion";
import Umpl from "../Page Object/Umpl";

describe('suite de tests de la page de connexion', async ()=>
{

    before('accéder au lien', async ()=>
    {
        await browser.url("https://www.saucedemo.com/")
    })
    
    it('se connecter cas non passant', async ()=>
    {
        // step 1 : Vérifier le placeholder de Username avec Password ( expected result: Username, Password )
        await Umpl.VerifierAttribut(Connexion.Username, 'placeholder', 'Username')
        await Umpl.VerifierAttribut(Connexion.Password, 'placeholder', 'Password')
        // step 2 : Entrer le Username et Passwordd ( username: standard_use, password: secret_sauce )
        await Connexion.typeUsername('standard_use')
        await Connexion.typePassword('secret_sauce')
        // step 3 : cliquer sur le bouton login
        await Connexion.LoginBtn.click()
        // step 4 : Vérifier la couleur du fond de message d'erreur (expected result: rgba(226,35,26,1)) 
        await Umpl.VerifierCSS(Connexion.MessageERR, 'background-color', 'rgba(226,35,26,1)')
        // step 5 : Vérifier la couleur du text de message d'erreur (expected result: rgba(255,255,255,1)) 

      //  await Umpl.VerifierCSS(Connexion.TextMessageERR, 'color', 'rgba(255,255,255,1)')
        // step 6 : Vérifier le text du message d'erreur (expected result: Epic sadface: Username and password do not match any user in this service )
      //  await Umpl.VerifierText(Connexion.TextMessageERR, 'Epic sadface: Username and password do not match any user in this service')
        // step 7: Vérifier la couleur des bordure de bas de username et password ( expected result: rgba(226,35,26,1) )

        await Umpl.VerifierCSS(Connexion.Username, 'border-bottom-color', 'rgba(226,35,26,1)')
        await Umpl.VerifierCSS(Connexion.Password, 'border-bottom-color', 'rgba(226,35,26,1)')
    })

    it('se connecter cas passant', async ()=>
    {
        // step1 : Entrer le Username et Passwordd ( username: standard_user, password: secret_sauce )
        await Connexion.typeUsername('standard_user')
        await Connexion.typePassword('secret_sauce')
        // step 2 : cliquer sur le bouton login
        await Connexion.LoginBtn.click()
        // step 3 : vérifier l'url
        var currentUrl = await browser.getUrl()
        expect(currentUrl).toEqual('https://www.saucedemo.com/inventory.html')
        browser.pause(1000)
    })
})