<script lang="ts">
  import Faucet from "$lib/components/Faucet.svelte";
  import { Symphonie, type NetworkData } from "$lib/utils/networkData";
  import faqMd from "$lib/assets/FAQ.md?raw";

  let network: NetworkData = Symphonie;
  let faq: string = faqMd
    .replaceAll("<NETWORK-TOKEN>", network.currency.replace("$", ""))
    .replaceAll("<NETWORK-NAME>", network.networkName);
</script>

<Faucet {network} {faq} />
