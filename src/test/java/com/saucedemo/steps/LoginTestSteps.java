package com.saucedemo.steps;

import com.saucedemo.pages.LoginPage;
import com.saucedemo.pages.ProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginTestSteps {

    @Given("^I am on log in page$")
    public void iAmOnLogInPage() {
    }

    @When("^I enter \"([^\"]*)\" as username$")
    public void iEnterAsUsername(String username)  {
        new LoginPage().enterUsername(username);
    }

    @And("^I enter \"([^\"]*)\" as password$")
    public void iEnterAsPassword(String password)  {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on 'Login' button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();

    }

    @Then("^I verify the text \"([^\"]*)\" on product page$")
    public void iVerifyTheTextOnProductPage(String expectedText)  {
        String actualText = new ProductPage().verifyTitleOfProductsPage();
        Assert.assertEquals(actualText, expectedText);

    }

    @Then("^I verify '(\\d+)' number of products displayed on page$")
    public void iVerifyNumberOfProductsDisplayedOnPage(int expectedProducts) {
        int actual =new ProductPage().verifyNumberOfOfProductsDisplayed();
        Assert.assertEquals(actual,expectedProducts);
    }
}
