import Commande from "../Page Object/Commande";
import Connexion from "../Page Object/Connexion";
import Home from "../Page Object/Home";
import Umpl from "../Page Object/Umpl";

describe('suite de tests de la page de connexion', async ()=>
{

    before('accéder au lien', async ()=>
    {
        await browser.url("https://www.saucedemo.com/")
        await Connexion.typeUsername('standard_user')
        await Connexion.typePassword('secret_sauce')
        await Connexion.LoginBtn.click()
    })
    
    it('Vérifier items', async ()=>
    {
        var elems =  (await $$('//*[@class="inventory_list"]'))
        await browser.pause(2000)
        console.log('++++++++++++++++++++++++++++++' + (await $$('.inventory_item_description')).length);

         console.log("+++++++++++++++++++++++++++++++++++++" + (expect(elems).toHaveChildren({ gte: 6 })));
        expect(elems).toHaveChildren({ gte: 5 })
        
       await  browser.pause(3000)
        

    
        
        // step 3 : Vérifier s'il existe les titres + couleur ( expected color : rgba(226,35,26,1))
        // step 4 : Vérifier s'il existe la description + couleur (expected result:  )
        // step 5 : Vérifier s'il existe le prix + la couleur du prix  (expected result: rgba(226,35,26,1) ) 
        // step 6 : Vérifier si elle existe la case de add to card + couleur de block et le texte ecrit (expected texte: , expected color :  )
    })
})