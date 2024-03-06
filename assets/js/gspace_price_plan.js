const communicatePlanTexts = document.querySelectorAll(
  ".plan_communicate_text"
);
const communicatePlans = document.querySelectorAll(".plan_communicate");
const communicatePlanIcons = document.querySelectorAll(
  ".plan_communicate_icons"
);
const communicatePlanItems = document.querySelectorAll(
  ".plan_communicate_items"
);

communicatePlans.forEach((communicatePlan) => {
  communicatePlan.addEventListener("click", () => {
    communicatePlanTexts.forEach((communicatePlanText) => {
      communicatePlanText.classList.toggle("active");
    });

    communicatePlanIcons.forEach((communicatePlanIcon) => {
      communicatePlanIcon.classList.toggle("active");
    });

    communicatePlanItems.forEach((communicatePlanItem) => {
      communicatePlanItem.classList.toggle("active");
    });
  });
});

const collaboratePlanTexts = document.querySelectorAll(
  ".plan_collaborate_text"
);
const collaboratePlans = document.querySelectorAll(".plan_collaborate");
const collaboratePlanIcons = document.querySelectorAll(
  ".plan_collaborate_icons"
);
const collaboratePlanItems = document.querySelectorAll(
  ".plan_collaborate_items"
);

collaboratePlans.forEach((collaboratePlan) => {
  collaboratePlan.addEventListener("click", () => {
    collaboratePlanTexts.forEach((collaboratePlanText) => {
      collaboratePlanText.classList.toggle("active");
    });

    collaboratePlanIcons.forEach((collaboratePlanIcon) => {
      collaboratePlanIcon.classList.toggle("active");
    });

    collaboratePlanItems.forEach((collaboratePlanItem) => {
      collaboratePlanItem.classList.toggle("active");
    });
  });
});
