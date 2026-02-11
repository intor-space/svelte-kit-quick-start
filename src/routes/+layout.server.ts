import { intor } from "intor/server";
import { intorConfig } from "$lib/i18n/intor-config";
import { getTranslator } from "intor/server";

export const load = async ({ locals, fetch }) => {
  const intorValue = await intor(intorConfig, locals.intor.locale, { fetch });

  // Server-side translator (e.g. for metadata or API routes)
  const { t } = await getTranslator(intorConfig, {
    locale: locals.intor.locale,
  });

  return { intorValue };
};
