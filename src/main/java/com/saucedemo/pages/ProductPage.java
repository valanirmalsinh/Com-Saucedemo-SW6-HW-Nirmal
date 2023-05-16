package com.saucedemo.pages;

import com.saucedemo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ProductPage extends Utility {

    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());
    public ProductPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//span[text()='Products']")
    WebElement productsTitle;

    @CacheLookup
    @FindBy(className = "inventory_item")
    List<WebElement> allProductList;

    public String verifyTitleOfProductsPage(){
        log.info("Getting products page title : " + productsTitle.toString());
        return getTextFromElement(productsTitle);
    }

    public int verifyNumberOfOfProductsDisplayed(){
        log.info("Getting number of products : " + allProductList.toString());
        return getSizeOfElement(allProductList);
    }


}
