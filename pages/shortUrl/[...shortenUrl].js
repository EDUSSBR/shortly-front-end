import { services } from "../../src/services"

export default function Page({ }) {
  return
}
export async function getServerSideProps(ctx) {
  try {
    const url = await (await services.redirect(ctx.params.shortenUrl[0])).text()
    console.log(url)
    return {
      redirect: {
        destination: url,
        permanent: true,
      }
    };
  } catch (e) {
    console.log(e)
    return {
      redirect: {
        destination: '/ranking',
        permanent: false
      }
    }
  }
}
