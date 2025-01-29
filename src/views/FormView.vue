<template>
    <div>
        <!-- <FormularioSimple /> 
        <FormularioEnvio /> -->
        <FormularioCampos />
    </div>
</template>

<script>
//import FormularioSimple from '@/components/FormularioSimple.vue';
//import FormularioEnvio from '@/components/FormularioEnvio.vue';
import FormularioCampos from '@/components/FormularioCampos.vue';

export default {
    name: 'FormView',
    components: {
        //FormularioSimple,
        //FormularioEnvio,
        FormularioCampos
    }
}
</script>