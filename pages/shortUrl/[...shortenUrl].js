import { services } from "../../src/services"

export default function Page({ }) {
  return <></>
}
export async function getServerSideProps(ctx) {
  try {
    let url = await (await services.redirect(ctx.params.shortenUrl[0])).text()
    console.log(url)
    if (url === "Not Found") {
      return {
        notFound: true,
      };
    };
    if (!url.includes('http')){
      url = "http://"+url
    }
    
    console.log(url)
    return {
      redirect: {
        destination: url,
        permanent: true,
      }
    };
  } catch (e) {
    console.log(e)
  }
}
