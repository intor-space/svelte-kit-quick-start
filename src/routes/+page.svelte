<script lang="ts">
  import { useTranslator } from "intor/svelte";
  import { useNavigation } from "intor/svelte-kit";

  const { t, tRich } = useTranslator();
  const { goto } = useNavigation();
</script>

<p>{$t("hello", { name: "Intor" })}</p>

<p>{@html $tRich("rich", { tag: (children) => `<b>${children}</b>` })}</p>

<button onclick={() => goto("/", { locale: "en" })}>English</button>
<button onclick={() => goto("/", { locale: "fr" })}>French</button>
