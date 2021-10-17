import { useRouter } from "next/dist/client/router";

export default function RouteHeader() {

  const route = useRouter();

  const toWord = (word: string) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`
  }

  return toWord(route.route.split('/').reverse()[0]);
}