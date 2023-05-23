import { AppDataSource } from "./data-source";
import { Country } from "./entity/Country";

AppDataSource.initialize()
  .then(async () => {
    console.log("Initializing countries");
    const country = new Country();
    country.code = "UK";
    country.emoji = "🇬🇧";
    country.name = "United Kingdom";

    await AppDataSource.manager.save(country);
    console.log(`Saved country ${country.name} with id ${country.id}`);
  })
  .catch((err) => console.error(err));
