import { Pelt, JSONData } from "./types";

const nameToSpritesname = {
  SingleColour: "single",
  SterSingle: "stersingle",
  SillySingle: "sillysingle",
  DanceSingle: "dancesingle",
  MimiSingle: "mimisingle",
  TwoColour: "single",
  Tabby: "tabby",
  Stertabby: "stertabby",
  Sillytabby: "sillytabby",
  Dancetabby: "dancetabby",
  Mimitabby: "mimitabby",
  Marbled: "marbled",
  Stermarbled: "stermarbled",
  Sillymarbled: "sillymarbled",
  Dancemarbled: "dancemarbled",
  Mimimarbled: "mimimarbled",
  Rosette: "rosette",
  Sterrosette: "sterrosette",
  Sillyrosette: "sillyrosette",
  Dancerosette: "dancerosette",
  Mimirosette: "mimirosette",
  Smoke: "smoke",
  Stersmoke: "stersmoke",
  Sillysmoke: "sillysmoke",
  Dancesmoke: "dancesmoke",
  Mimismoke: "mimismoke",
  Ticked: "ticked",
  Sterticked: "sterticked",
  Sillyticked: "sillyticked",
  Danceticked: "danceticked",
  Mimiticked: "mimiticked",
  Speckled: "speckled",
  Sterspeckled: "sterspeckled",
  Sillyspeckled: "sillyspeckled",
  Dancespeckled: "dancespeckled",
  Mimispeckled: "mimispeckled",
  Bengal: "bengal",
  Sterbengal: "sterbengal",
  Sillybengal: "sillybengal",
  Dancebengal: "dancebengal",
  Mimibengal: "mimibengal",
  Mackerel: "mackerel",
  Stermackerel: "stermackerel",
  Sillymackerel: "sillymackerel",
  Dancemackerel: "dancemackerel",
  Mimimackerel: "mimimackerel",
  Classic: "classic",
  Sterclassic: "sterclassic",
  Sillyclassic: "sillyclassic",
  Danceclassic: "danceclassic",
  Mimiclassic: "mimiclassic",
  Sokoke: "sokoke",
  Stersokoke: "stersokoke",
  Sillysokoke: "sillysokoke",
  Dancesokoke: "dancesokoke",
  Mimisokoke: "mimisokoke",
  Agouti: "agouti",
  Singlestripe: "singlestripe",
  Sterstripe: "sterstripe",
  Sillystripe: "sillystripe",
  Dancestripe: "dancestripe",
  Mimistripe: "mimistripe",
  Masked: "masked",
  Stermasked: "stermasked",
  Sillymasked: "sillymasked",
  Dancemasked: "dancemasked",
  Mimimasked: "mimimasked",
  Brindle: "brindle",
  Wolf: "wolf",
  Wildcat: "wildcat",
  Spots: "spots",
  Smokepoint: "smokepoint",
  Steragouti: "steragouti",
  Sillyagouti: "sillyagouti",
  Danceagouti: "danceagouti",
  Mimiagouti: "mimiagouti",
  Finleappatches: "finleappatches",
  Tortie: "",
  Calico: "",
  Stain: "stain",
  Maned: "maned",
  Ocelot: "ocelot",
  Lynx: "lynx",
  Dalmatian: "dalmatian",
  Royal: "royal",
  Bobcat: "bobcat",
  Cheetah: "cheetah",
  Abyssinian: "abyssinian",
  Clouded: "clouded",
  Doberman: "doberman",
  GhostTabby: "ghosttabby",
  Merle: "merle",
  Monarch: "monarch",
  Oceloid: "oceloid",
  PinstripeTabby: "pinstripetabby",
  Snowflake: "snowflake",
  Dot: "dot",
  Caliisokoke: "caliisokoke",
  Caliispeckled: "caliispeckled",
  Dotfade: "dotfade",
  Circletabby: "circletabby",
  Colourpoint: "colourpoint",
  Lynxpoint: "lynxpoint",
  Birchtabby: "birchtabby",
};

const spritesnameToName = {
  single: "TwoColor",
  stersingle: "Stersingle",
  sillysingle: "Sillysingle",
  dancesingle: "Dancesingle",
  mimisingle: "Mimisingle",
  tabby: "Tabby",
  stertabby: "Stertabby",
  sillytabby: "Sillytabby",
  dancetabby: "Dancetabby",
  mimitabby: "Mimitabby",
  marbled: "Marbled",
  stermarbled: "Stermarbled",
  sillymarbled: "Sillymarbled",
  dancemarbled: "Dancemarbled",
  mimimarbled: "Mimimarbled",
  rosette: "Rosette",
  sterrosette: "Sterrosette",
  sillyrosette: "Sillyrosette",
  dancerosette: "Dancerosette",
  mimirosette: "Mimirosette",
  smoke: "Smoke",
  stersmoke: "Stersmoke",
  sillysmoke: "Sillysmoke",
  dancesmoke: "Dancesmoke",
  mimismoke: "Mimismoke",
  ticked: "Ticked",
  sterticked: "Sterticked",
  sillyticked: "Sillyticked",
  danceticked: "Danceticked",
  mimiticked: "Mimiticked",
  speckled: "Speckled",
  sterspeckled: "Sterspeckled",
  sillyspeckled: "Sillyspeckled",
  dancespeckled: "Dancespeckled",
  mimispeckled: "Mimispeckled",
  bengal: "Bengal",
  sterbengal: "Sterbengal",
  sillybengal: "Sillybengal",
  dancebengal: "Dancebengal",
  mimibengal: "Mimibengal",
  mackerel: "Mackerel",
  stermackerel: "Stermackerel",
  sillymackerel: "Sillymackerel",
  dancemackerel: "Dancemackerel",
  mimimackerel: "Mimimackerel",
  classic: "Classic",
  sterclassic: "Sterclassic",
  sillyclassic: "Sillyclassic",
  danceclassic: "Danceclassic",
  mimiclassic: "Mimiclassic",
  sokoke: "Sokoke",
  stersokoke: "Stersokoke",
  sillysokoke: "Sillysokoke",
  dancesokoke: "Dancesokoke",
  mimisokoke: "Mimisokoke",
  agouti: "Agouti",
  singlestripe: "Singlestripe",
  sterstripe: "Sterstripe",
  sillystripe: "Sillystripe",
  dancestripe: "Dancestripe",
  mimistripe: "Mimistripe",
  masked: "Masked",
  stermasked: "Stermasked",
  sillymasked: "Sillymasked",
  dancemasked: "Dancemasked",
  mimimasked: "Mimimasked",
  brindle: "Brindle",
  wolf: "Wolf",
  wildcat: "Wildcat",
  spots: "Spots",
  smokepoint: "Smokepoint",
  steragouti: "Steragouti",
  sillyagouti: "Sillyagouti",
  danceagouti: "Danceagouti",
  mimiagouti: "Mimiagouti",
  finleappatches: "Finleappatches",
  stain: "Stain",
  maned: "Maned",
  ocelot: "ocelot",
  lynx: "Lynx",
  dalmatian: "Dalmatian",
  royal: "Royal",
  bobcat: "Bobcat",
  cheetah: "Cheetah",
  abyssinian: "Abyssinian",
  clouded: "Clouded",
  doberman: "Doberman",
  ghosttabby: "ghosttabby",
  merle: "Merle",
  monarch: "Monarch",
  oceloid: "oceloid",
  pinstripetabby: "Pinstripetabby",
  snowflake: "Snowflake",
  dot: "Dot",
  caliisokoke: "Caliisokoke",
  caliispeckled: "Caliispeckled",
  dotfade: "Dotfade",
  circletabby: "Circletabby",
  colourpoint: "Colourpoint",
  lynxpoint: "Lynxpoint",
  birchtabby: "Birchtabby",
};

class CatData {
  shading: boolean;
  reverse: boolean;
  isTortie: boolean;

  backgroundColour: string;
  tortieMask: string | null;
  tortieColour: string | null;
  tortiePattern: string | null;

  peltName: string;
  spriteNumber: number;
  colour: string;
  tint: string;
  skinColour: string;
  eyeColour: string;
  eyeColour2: string | null;
  whitePatches: string | null;
  points: string | null;
  whitePatchesTint: string;
  vitiligo: string | null;
  accessory: string | null;
  scar: string | null;

  constructor() {
    this.shading = false;
    this.reverse = false;
    this.isTortie = false;

    this.backgroundColour = "rgb(0 0 0 / 0)";

    this.tortieMask = null;
    this.tortieColour = null;
    this.tortiePattern = null;

    this.peltName = "SingleColour";
    this.spriteNumber = 0;
    this.colour = "CREAM";
    this.tint = "none";
    this.skinColour = "BLACK";
    this.eyeColour = "YELLOW";
    this.eyeColour2 = null;

    this.whitePatches = null;
    this.points = null;
    this.whitePatchesTint = "none";
    this.vitiligo = null;

    this.accessory = null;
    this.scar = null;
  }

  public get name(): string {
    if (this.isTortie) {
      return "Tortie";
    } else {
      return this.peltName;
    }
  }

  getPelt(): Pelt {
    const peltName = this.peltName as keyof typeof nameToSpritesname;
    const tortiePattern = this.tortiePattern as keyof typeof nameToSpritesname;

    const pelt: Pelt = {
      name: this.name,
      colour: this.colour,
      skin: this.skinColour,
      tint: this.tint,
      whitePatchesTint: this.whitePatchesTint,
      eyeColour: this.eyeColour,
      eyeColour2: this.eyeColour2 === null ? undefined : this.eyeColour2,
      whitePatches: this.whitePatches === null ? undefined : this.whitePatches,
      points: this.points === null ? undefined : this.points,
      vitiligo: this.vitiligo === null ? undefined : this.vitiligo,
      spritesName: nameToSpritesname[peltName],
      accessory: this.accessory === null ? undefined : this.accessory,
      reverse: this.reverse,

      tortieBase: nameToSpritesname[peltName],
      pattern: this.tortieMask === null ? undefined : this.tortieMask,
      tortiePattern: nameToSpritesname[tortiePattern],
      tortieColour: this.tortieColour === null ? undefined : this.tortieColour,

      scars: [],
    };
    if (this.scar) {
      pelt["scars"] = [this.scar];
    }

    return pelt;
  }

  getJSONData() {
    const peltName = this.peltName as keyof typeof nameToSpritesname;
    const tortiePattern = this.tortiePattern as keyof typeof nameToSpritesname;

    return JSON.stringify(
      {
        pelt_name: this.name,
        pelt_color: this.colour,
        eye_colour: this.eyeColour,
        eye_colour2: this.eyeColour2,
        reverse: this.reverse,
        white_patches: this.whitePatches,
        vitiligo: this.vitiligo,
        points: this.points,
        white_patches_tint: this.whitePatchesTint,
        pattern: this.name === "Tortie" ? this.tortieMask : null,
        tortie_base:
          this.name === "Tortie" ? nameToSpritesname[peltName] : null,
        tortie_pattern:
          this.name === "Tortie" ? nameToSpritesname[tortiePattern] : null,
        tortie_color: this.name === "Tortie" ? this.tortieColour : null,
        skin: this.skinColour,
        tint: this.tint,
        scars: this.scar,
        accessory: this.accessory === undefined ? null : this.accessory,
      },
      undefined,
      4,
    );
  }

  getURL(base: string) {
    const params = new URLSearchParams({
      shading: this.shading.toString(),
      reverse: this.reverse.toString(),
      isTortie: this.isTortie.toString(),
      backgroundColour: this.backgroundColour,

      tortieMask: this.tortieMask === null ? "" : this.tortieMask,
      tortieColour: this.tortieColour === null ? "" : this.tortieColour,
      tortiePattern: this.tortiePattern === null ? "" : this.tortiePattern,

      peltName: this.peltName,
      spriteNumber: this.spriteNumber.toString(),
      colour: this.colour,
      tint: this.tint,
      skinColour: this.skinColour,
      eyeColour: this.eyeColour,
      eyeColour2: this.eyeColour2 === null ? "" : this.eyeColour2,
      whitePatches: this.whitePatches === null ? "" : this.whitePatches,
      points: this.points === null ? "" : this.points,
      whitePatchesTint: this.whitePatches === null ? "" : this.whitePatchesTint,
      vitiligo: this.vitiligo === null ? "" : this.vitiligo,
      accessory: this.accessory === null ? "" : this.accessory,
      scar: this.scar === null ? "" : this.scar,
      version: "v1",
    });
    return new URL(`${base}?${params}`);
  }

  static fromPelt(pelt: Pelt) {
    const spritesName = pelt.tortiePattern as keyof typeof spritesnameToName;
    const catData = new CatData();

    if (pelt.name === "Tortie" || pelt.name === "Calico") {
      catData.isTortie = true;
      catData.peltName =
        spritesnameToName[pelt.tortieBase! as keyof typeof spritesnameToName];
    } else {
      catData.isTortie = false;
      catData.peltName = pelt.name;
    }
    catData.colour = pelt.colour;
    catData.skinColour = pelt.skin;
    catData.tint = pelt.skin;
    catData.eyeColour = pelt.eyeColour;
    catData.eyeColour2 = pelt.eyeColour2 === undefined ? null : pelt.eyeColour2;

    catData.whitePatchesTint = pelt.whitePatchesTint;
    catData.whitePatches =
      pelt.whitePatches === undefined ? null : pelt.whitePatches;
    catData.points = pelt.points === undefined ? null : pelt.points;
    catData.vitiligo = pelt.vitiligo === undefined ? null : pelt.vitiligo;

    catData.accessory = pelt.accessory === undefined ? null : pelt.accessory;
    catData.reverse = pelt.reverse;

    catData.tortieMask = pelt.pattern === undefined ? null : pelt.pattern;
    catData.tortiePattern =
      pelt.tortiePattern === undefined ? null : spritesnameToName[spritesName];
    catData.tortieColour =
      pelt.tortieColour === undefined ? null : pelt.tortieColour;

    return catData;
  }

  static fromURL(url: string) {
    const catData = new CatData();
    const params = new URL(url).searchParams;

    if (params.get("version") === "v1") {
      const scar = params.get("scar");
      const accessory = params.get("accessory");
      const vitiligo = params.get("vitiligo");
      const whitePatchesTint = params.get("whitePatchesTint");
      const points = params.get("points");
      const whitePatches = params.get("whitePatches");
      const eyeColour2 = params.get("eyeColour2");
      const eyeColour = params.get("eyeColour");
      const skinColour = params.get("skinColour");
      const tint = params.get("tint");
      const colour = params.get("colour");
      const spriteNumber = params.get("spriteNumber");
      const peltName = params.get("peltName");
      const tortiePattern = params.get("tortiePattern");
      const tortieColour = params.get("tortieColour");
      const tortieMask = params.get("tortieMask");
      const backgroundColour = params.get("backgroundColour");

      const isTortie = params.get("isTortie");
      const shading = params.get("shading");
      const reverse = params.get("reverse");

      catData.isTortie = isTortie === "true" ? true : false;
      catData.shading = shading === "true" ? true : false;
      catData.reverse = reverse === "true" ? true : false;

      if (scar) {
        catData.scar = scar;
      }
      if (accessory) {
        catData.accessory = accessory;
      }
      if (vitiligo) {
        catData.vitiligo = vitiligo;
      }
      if (whitePatchesTint) {
        catData.whitePatchesTint = whitePatchesTint;
      }
      if (points) {
        catData.points = points;
      }
      if (whitePatches) {
        catData.whitePatches = whitePatches;
      }
      if (eyeColour2) {
        catData.eyeColour2 = eyeColour2;
      }
      if (eyeColour) {
        catData.eyeColour = eyeColour;
      }
      if (skinColour) {
        catData.skinColour = skinColour;
      }
      if (tint) {
        catData.tint = tint;
      }
      if (colour) {
        catData.colour = colour;
      }
      if (spriteNumber) {
        catData.spriteNumber = Number(spriteNumber);
      }
      if (peltName) {
        catData.peltName = peltName;
      }
      if (tortiePattern) {
        catData.tortiePattern = tortiePattern;
      }
      if (tortieColour) {
        catData.tortieColour = tortieColour;
      }
      if (tortieMask) {
        catData.tortieMask = tortieMask;
      }
      if (backgroundColour) {
        catData.backgroundColour = backgroundColour;
      }

      return catData;
    }
    return catData;
  }

  static fromJSONData(data: JSONData) {
    const catData = new CatData();

    if (data.pelt_name === "Tortie" || data.pelt_name === "Calico") {
      catData.isTortie = true;
      catData.peltName = 
        spritesnameToName[data.tortie_base! as keyof typeof spritesnameToName];
    } else {
      catData.isTortie = false;
      catData.peltName = data.pelt_name;
    }
    catData.colour = data.pelt_color;
    catData.skinColour = data.skin;
    catData.tint = data.tint;
    catData.eyeColour = data.eye_colour;
    catData.eyeColour2 = data.eye_colour2;

    catData.whitePatchesTint = data.white_patches_tint;
    catData.whitePatches = data.white_patches;
    catData.points = data.points;
    catData.vitiligo = data.vitiligo;
    if (Array.isArray(data.accessory)) {
      catData.accessory = data.accessory.length === 0 ? null : data.accessory[0];
    } else {
      catData.accessory = data.accessory;
    }
    catData.reverse = data.reverse;

    catData.tortieMask = catData.isTortie ? data.pattern : null;
    catData.tortiePattern = 
      data.tortie_pattern === null ? null : spritesnameToName[data.tortie_pattern as keyof typeof spritesnameToName];
    catData.tortieColour = data.tortie_color;
    return catData;
  }
}

export default CatData;
