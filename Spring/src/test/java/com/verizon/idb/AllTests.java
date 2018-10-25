package com.verizon.idb;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ PackageControllerTest.class, PackageIntegrationTest.class, TaranginiIspApplicationTests.class,
		UserIntegrationTest.class, UsersAPITest.class })
public class AllTests {

}
