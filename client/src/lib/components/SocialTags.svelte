<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import socialImage from "$lib/assets/allfeat.png";
</script>

<MetaTags
  title="Allfeat Faucet"
  description="A fast and reliable Allfeat testnet faucet for blockchain developers."
  openGraph={{
    images: [{ url: socialImage }],
  }}
  twitter={{
    title: "Allfeat Faucet",
    description: "A fast and reliable Allfeat testnet faucet for blockchain developers.",
    image: socialImage,
    imageAlt: "Allfeat Faucet Website",
  }}
/>
