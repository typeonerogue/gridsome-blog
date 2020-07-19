<template>
  <Layout>
    <h2>{{ $context.title }}</h2>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="$context.content"></div>
  </Layout>
</template>