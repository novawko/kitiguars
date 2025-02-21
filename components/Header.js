import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img src="https://images2.imgbox.com/cf/2e/bpyLZwLN_o.png" className="block w-20 h-20 mx-auto mb-4 rounded-full" />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
