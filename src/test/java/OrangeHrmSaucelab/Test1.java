package OrangeHrmSaucelab;

import org.testng.annotations.Test;

public class Test1 extends Base{


    @Test
    public void check(){
        LoadProps loadProps=new LoadProps();
        driver.get(loadProps.getProperty("Url"));
    }
}
