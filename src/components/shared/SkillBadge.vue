<template>
  <span :class="['skill-badge', variant]">{{ label }}</span>
</template>

<script>
  export default {
    name: 'SkillBadge',
    props: {
      label: {
        type: String,
        required: true
      },
      variant: {
        type: String,
        default: 'default',
        validator: (v) => ['default', 'small'].includes(v)
      }
    }
  }
</script>

<style scoped>
  .skill-badge {
    display: inline-block;
    background: rgba(51, 255, 184, 0.1);
    border: 1px solid rgba(51, 255, 184, 0.25);
    border-radius: 20px;
    padding: 4px 12px;
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: var(--color-primary);
    white-space: nowrap;
  }

  .skill-badge.small {
    padding: 2px 8px;
    font-size: 11px;
  }
</style>
