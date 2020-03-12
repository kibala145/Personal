<template>
  <div class="about">
    <h1>{{$t('views.about.header')}}</h1>
    <h2>{{$t('views.about.phrase')}}</h2>
    <ul>
      <li>
        Vue features:
        <ol>
          <li>
            Vuex
          </li>
          <li>
            Vue cli
          </li>
          <li>
            Functional components
          </li>
          <li>
            Transition component
          </li>
          <li>
            Inject svg inline as Vue component
          </li>
          <li>
            I18n lang module usage (translations loaded asynchronously)
          </li>
          <li>
            Language being kept in local storage
          </li>
        </ol>
      </li>
      <li>
        Other:
        <ol>
          <li>
            Scss 7-1 project structure
          </li>
          <li>
            Pure js
          </li>
          <li>
            Css transition for smooth transition
          </li>
          <li>
            Responsive
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>
