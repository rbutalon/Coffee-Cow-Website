import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        aboutUs: './aboutUs.html',
        contactUs: './contactUs.html',
        menuEspresso: './menu-espresso.html',
        menuFrappe: './menu-frappe.html',
        menuFruitSoda: './menu-fruitSoda.html',
        menuFruitTea: './menu-fruitTea.html',
        menuMilkTea: './menu-milkTea.html',
        menuNonCoffee: './menu-nonCoffee.html',
        menuPasta: './menu-pasta.html',
        menuSmoothies: './menu-smoothies.html',
        menuSpecialty: './menu-specialty.html',
        menuTastyBites: './menu-tastyBites.html',
      },
    },
  },
});
