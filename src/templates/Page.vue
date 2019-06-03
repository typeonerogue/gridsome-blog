<template>
  <Layout>
    <h2>{{ $context.title }}</h2>
    <div v-html="$context.content"></div>
  </Layout>
</template>