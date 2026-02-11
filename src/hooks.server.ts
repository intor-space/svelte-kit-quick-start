import { createIntorHandler } from "intor/svelte-kit";
import { intorConfig } from "$lib/i18n/intor-config";

export const handle = createIntorHandler(intorConfig);
