export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/nemvieta-b328d.appspot.com/o/z4926484072047_d8b38f6b5d42eef047739016c2125b3b.jpg?alt=media&token=c348cb46-252e-4ba5-af64-48e4dc4635b0"
          alt="Introduce Header"
          className="w-[100vw] h-[700px] object-cover"
        />
      </div>
      {children}
    </>
  );
}
