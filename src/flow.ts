import * as path from "path";
import { merge } from "./helpers";

function convertToFlow() {
  const __SOURCE_DIRECTORY__ = __dirname;
  const inputFolder = path.join(__SOURCE_DIRECTORY__, "../", "inputfiles");
  const overriddenItems = require(path.join(
    inputFolder,
    "overridingTypes.json"
  ));
  const addedItems = require(path.join(inputFolder, "addedTypes.json"));

  const overriddenItemsFlowgenPath = path.join(
    inputFolder,
    "overridingTypes.flowgen.json"
  );
  const addedItemsFlowgenPath = path.join(
    inputFolder,
    "addedTypes.flowgen.json"
  );

  console.log(overriddenItems);
  console.log(addedItems);
}

convertToFlow();
