interface props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: props) {
  return (
    <>
      <h1 className="text-4xl">React Hooks</h1>
      <div className="my-10 mx-auto">{children}</div>
    </>
  );
}

export default DefaultLayout;
