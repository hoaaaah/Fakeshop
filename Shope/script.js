function collectXu() {
  let current = parseInt(document.getElementById('xu-total').innerText);
  let earned = 3800;
  let newTotal = current + earned;
  document.getElementById('xu-total').innerText = newTotal;
  alert(`Bạn đã nhận thêm ${earned} xu! Tổng xu: ${newTotal}`);
}
