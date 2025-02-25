

export default function Secondsection() {
  return (
    <div>
        <section className="relative md:py-24 py-16 bg-zinc-50 dark:bg-gray-800" id="about">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <img src="/about.jpg" className="rounded-lg shadow-lg relative" alt=""/>
                            <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="lg:ml-7">
                            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">ما که هستیم؟</h6>
                            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">داستان شرکت ما</h3>

                            <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">شروع به کار با طراحی سایت ما کنید که می تواند هر آنچه را که برای ایجاد آگاهی، هدایت ترافیک، و اتصال به آن نیاز دارید، فراهم کند. متن ساختگی متنی است که در صنعت انتشار یا توسط طراحان وب برای اشغال فضایی که بعداً با محتوای «واقعی» پر می‌شود، استفاده می‌شود. برای مثال، زمانی که متن نهایی هنوز در دسترس نیست، این مورد ضروری است. از قرن شانزدهم متون ساختگی توسط حروفچینی ها مورد استفاده قرار گرفته است.</p>
                        
                            <div className="relative mt-10">
                                <a href="#portfolio" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">نمونه کار</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
