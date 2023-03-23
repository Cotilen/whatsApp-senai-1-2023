"use strict";

import { contatos } from "https://fernandoleonid.github.io/whatsApp-senai-1-2023/recursos/contatos.js";
import { changeElements } from "./change-elements.js";
import { returnIcon } from "./return.js";
import { chargeContacts } from "./charge-contacts.js";
import { chargeProfile } from "./charge-profile.js";
import { showMessages } from "./show-messages.js";
import { changeColors } from "./change-colors.js";

changeColors();
chargeContacts(contatos);
chargeProfile(contatos);
showMessages(contatos);
changeElements();
returnIcon();
