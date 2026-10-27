// ============================================================
// MOBILE MANAGEMENT SYSTEM
// ============================================================

/*
REQUIREMENTS:

Each mobile phone contains:
1. Brand
2. Model
3. Operating System
4. RAM
5. Storage
6. Battery percentage
7. Installed applications

Operations:
1. Install an application
2. Use battery
3. Charge battery
4. Display mobile information
*/


// ============================================================
// 1. CREATING THE MOBILE CLASS
// ============================================================

class Mobile {

    /*
    CONSTRUCTOR:

    Executes automatically when an object is created.

    Initializes the mobile's properties.
    Battery starts at 100%.
    Installed applications start as an empty array.
    */

    constructor(brand, model, OS, ram, storage) {

        this.brand = brand;
        this.model = model;
        this.OS = OS;
        this.ram = ram;
        this.storage = storage;

        // Initial battery percentage
        this.battery = 100;

        // Stores installed application names
        this.apps = [];
    }


    // ========================================================
    // 2. INSTALL APPLICATION
    // ========================================================

    /*
    Parameters:
    appName = application name
    size = application size in GB

    Condition:
    Application size must be positive and available storage
    must be sufficient.
    */

    installApp(appName, size) {

        // Validate application size
        if (size <= 0) {
            console.log("Invalid application size");
            return;
        }

        // Check whether the application is already installed
        if (this.apps.includes(appName)) {
            console.log(`${appName} is already installed`);
            return;
        }

        // Check available storage
        if (this.storage < size) {
            console.log("Not enough storage");
            return;
        }

        // Add the application to the installed apps array
        this.apps.push(appName);

        // Reduce available storage
        this.storage -= size;

        // Display installation details
        console.log(`${appName} installed successfully`);
        console.log(
            `Remaining Storage: ${this.storage.toFixed(2)} GB`
        );

        console.log("-".repeat(30));
    }


    // ========================================================
    // 3. USE BATTERY
    // ========================================================

    /*
    Reduces the battery percentage by the specified amount.

    Battery cannot go below 0%.
    */

    useBattery(percent) {

        // Validate the percentage
        if (percent < 0) {
            console.log("Invalid battery usage percentage");
            return;
        }

        // Reduce battery, with a minimum of 0%
        this.battery = Math.max(0, this.battery - percent);

        console.log(
            `Battery remaining: ${this.battery.toFixed(2)}%`
        );

        console.log("-".repeat(30));
    }


    // ========================================================
    // 4. CHARGE BATTERY
    // ========================================================

    /*
    Increases battery percentage.

    Battery cannot exceed 100%.
    */

    chargeBattery(percent) {

        // Validate the charging percentage
        if (percent < 0) {
            console.log("Invalid charging percentage");
            return;
        }

        // Increase battery, with a maximum of 100%
        this.battery = Math.min(100, this.battery + percent);

        console.log(
            `Battery charged: ${this.battery.toFixed(2)}%`
        );

        console.log("-".repeat(30));
    }


    // ========================================================
    // 5. DISPLAY MOBILE INFORMATION
    // ========================================================

    /*
    Displays all mobile properties and installed applications.
    */

    getInfo() {

        console.log("-".repeat(30));

        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Operating System: ${this.OS}`);
        console.log(`RAM: ${this.ram} GB`);
        console.log(`Available Storage: ${this.storage.toFixed(2)} GB`);
        console.log(`Battery: ${this.battery.toFixed(2)}%`);

        // Convert the apps array into a comma-separated string
        console.log(
            `Installed Apps: ${this.apps.length > 0 ? this.apps.join(", ") : "None"
            }`
        );

        console.log("-".repeat(30));
    }
}


// ============================================================
// 6. CREATING A MOBILE OBJECT
// ============================================================

// Creating a Samsung mobile object
const myPhone = new Mobile(
    "Samsung",
    "S24 Ultra",
    "Android 15",
    12,
    256
);


// ============================================================
// 7. INSTALLING APPLICATIONS
// ============================================================

myPhone.installApp("WhatsApp", 0.2);
myPhone.installApp("Instagram", 0.5);
myPhone.installApp("Play Store", 0.1);
myPhone.installApp("Facebook", 0.3);


// ============================================================
// 8. USING BATTERY
// ============================================================

myPhone.useBattery(20);
myPhone.useBattery(35);


// ============================================================
// 9. CHARGING BATTERY
// ============================================================

myPhone.chargeBattery(40);


// ============================================================
// 10. DISPLAYING FINAL MOBILE INFORMATION
// ============================================================

myPhone.getInfo();