<template>
  <div class="min-h-screen bg-gray-200">
    <header class="pt-24 text-4xl text-center">
      <h1>Installation Wizard</h1>
    </header>
    <InstallationWizard v-model="index" class="py-24">
      <InstallationWizardStep label="Step Number 1">
        <pre class="bg-gray-800 text-white p-5 rounded">
PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
        </pre>
      </InstallationWizardStep>
      <InstallationWizardStep label="Step 2: DB-Connection">
        Bla
      </InstallationWizardStep>
      <InstallationWizardStep label="Step 3: Redis">
        Blubb
      </InstallationWizardStep>
      <InstallationWizardStep label="Step 4: Storage">
        Foo Bar
      </InstallationWizardStep>
    </InstallationWizard>
  </div>
</template>
<script>
import InstallationWizard from "@/components/Progress/Wizard/InstallationWizard";
import InstallationWizardStep from "@/components/Progress/Wizard/InstallationWizardStep";

export default {
  name: "Wizard",
  components: {
    InstallationWizard,
    InstallationWizardStep,
  },
  data() {
    return { index: 0 };
  },
};
</script>
