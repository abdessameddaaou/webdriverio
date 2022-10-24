class Home
{
    get ListItesms()
    {
        return $('//*[@class="inventory_item"]')
    }

    get Photos()
    {
        return $('//div[@class="inventory_item_img"]')
    }

    get TitreItems()
    {
        return $('//div[@class="inventory_item_name"]')
    }

    get DescItems()
    {
        return $('//div[@class="inventory_item_desc"]')
    }

    get AddToCard()
    {
        return $('.btn btn_primary btn_small btn_inventory')
    }

    get Price()
    {
        return $('.inventory_item_price')
    }


    // +++++++++++++++++++++++++++++++++++++++++ les méthodes ++++++++++++++++++++++++++++++++++++++++


}

export default new Home()