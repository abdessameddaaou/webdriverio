import { ChainablePromiseElement } from "webdriverio"

/**
 * cette classe à pour objectif de réutiliser les fonction qui se recommence plusieure fois
 * cette classe n'est pas spécifique à un cas de tests spécifique
 */
class Umpl
{

// Vérifier le css d'un élémenet ( color, background color, textalign ...)
    async VerifierCSS(locator: any, CssTeste: String, ExpectedResult: String )
    {
        const color = await locator.getCSSProperty(CssTeste)
        expect(color.value).toEqual(ExpectedResult)
    }

// Vérifier les attribut d'un élément
    async VerifierAttribut(locator:any, Attribut: String, ExpectedResult: string)
    {
         const attr = await locator.getAttribute(Attribut)
         await expect(attr).toEqual(ExpectedResult)
    }

// Vérifier le texte
    async VerifierText(locator: any, ExpectedResult: string)
    {
        await expect(locator).toHaveText(ExpectedResult)
    }

    // Vérifier le texte
    async VerifierTextActualresult(ActualResult: string, ExpectedResult: string)
    {
        await expect(ActualResult).toHaveText(ExpectedResult)
    }
// Vérifier si un élément existe
    async IsElementExiste(locator: any)
    {
        await expect(locator).toExist()
    }

// Vérifier si un élément est activé
    async IsElementActive(locator: any)
    {
        await expect(locator).toBeEnabled()
    }

// Vérifier si un élément est désactivé
    async IsElementDesactive(locator: any)
    {
        await expect(locator).toBeDisabled()
    }

// Vérifier si un élément est desplayed
    async IsElementDisplayed(locator: any)
    {
        await expect(locator).toBeDisplayed()
    }
}

export default new Umpl()