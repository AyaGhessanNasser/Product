
document.getElementById("productForm").addEventListener("submit", function(event) {
  event.preventDefault(); // منع إرسال النموذج

  var name = document.getElementsByName("name")[0].value;
  var price = document.getElementsByName("price")[0].value;
  var description = document.getElementsByName("description")[0].value;

  // إعداد وتوجيه المستخدم إلى صفحة المنتج مع استخدام البيانات المدخلة كمعلمات الاستعلام
  var queryParams = "?name=" + encodeURIComponent(name) + "&price=" + encodeURIComponent(price) + "&description=" + encodeURIComponent(description);
  window.location.href = "product.html" + queryParams;
});


document.addEventListener("DOMContentLoaded", function() {
  // استخراج معرف المنتج من معلمات الاستعلام في عنوان URL
  var urlParams = new URLSearchParams(window.location.search);
  var productId = urlParams.get("id");

  // إجراء طلب API للحصول على تفاصيل المنتج
  fetch("4" + productId)
  .then(response => response.json())
  .then(data => {
    var productInfo = document.getElementById("productInfo");
    productInfo.textContent = "اسم المنتج: " + data.name + "، السعر: " + data.price + "، الوصف" + data.description;
  })
  .catch(error => {
    console.error("Error:", error);
  });
});

