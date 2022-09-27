<template>
  <article>
    <section id="about-me">
      <div>
        <h1>Hi, I am Igor Kroeber!</h1>
        <h2>I'm a Software Engineer from Brazil.</h2>
      </div>
      <div>
        <p>
          I like to learn new technologies and I'm always
          adapting myself to the market's fast pace.
        </p>
        <p>
          If you need someone who is able to design solutions to the
          highest standards and can still be efficient enough to keep your
          project on schedule, contact me and let'a talk about it!
        </p>
      </div>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
article {
  height: 100%;
  width: 100%;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 5em;
}

h1,
h2,
p,
span {
  cursor: text;
}

#about-me {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

#about-me h1,
h2,
p {
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}

#about-me h1 {
  font-size: 60px;
}

#about-me h2 {
  font-size: 28px;
}

#about-me p {
  margin-top: 1em;
}

#about-me div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#about-me div:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media screen and (max-width:800px) {
  #about-me {
    flex-direction: column;
  }

  #about-me h1 {
    font-size: 38px;
  }

  #about-me h2 {
    font-size: 20px;
  }
}
</style>
