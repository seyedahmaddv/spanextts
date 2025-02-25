
export default function Herosection() {
  return (
    <div className="py-36 lg:py-64 w-full table relative bg-[url('/images/bg/5.jpg')] bg-no-repeat bg-center" id="home">
    <div className="container relative z-1">
        <div className="grid grid-cols-1 mt-12">
            <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">هر آنچه برای ساخت <br /> یک کمپانی بزرگ نیاز دارید</h4>
        
            <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">کمپین خود را راه اندازی کنید و از تخصص ما در طراحی و مدیریت صفحه وب سایت خودتان متمرکز بر تبدیل بهره مند شوید.</p>
        
            <div className="relative mt-10">
                <a href="https://seyedahmadgholami.ir" target="_blank" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">شروع کنید</a>
            </div>
        </div>
    </div>
    <div className="absolute lg:w-1/2 md:w-4/6 w-full h-full bg-gradient-to-t to-orange-600 from-orange-400 md:opacity-100 opacity-80 top-0"></div>
</div>
  )
}
