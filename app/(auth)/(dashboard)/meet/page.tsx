const MeetPage = () => {
  const current = new Date();
  const time = current.toLocaleTimeString('en-US', { hour:'2-digit', minute: '2-digit' });
  const day = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(current);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[250px] w-full rounded-[15px] bg-cover bg-slate-500">
        <div className="flex h-full flex-col justify-between max-md:px-4 max-md:py-7 lg:p-10">
          <h2 className="font-semibold bg-slate-600 backdrop-blur-3xl rounded-md max-w-[250px] py-2 text-center">Upcoming Meetings at</h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold lg:text-4xl">
              {time}
            </h1>
            <p className="text-lg text-slate-200 font-medium lg:text-xl">
              {day}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetPage;
