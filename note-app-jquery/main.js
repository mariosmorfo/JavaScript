
$(document).ready(function () {

  $('#addNoteBtn').on('click', function () {
    addNote();
   


  });


  $('#inputNote').on('keydown', function (e) {
    if (e.key === 'Enter') {
      addNote();
    }
  });


  updateTime();
  
})


const addNote = function () {
  let noteText = $('#inputNote').val().trim();

  if (noteText === "") {
    alert('Please enter a note!');
    return;
  }

  let noteElement = `<div class="p-2 border-b flex justify-between">
      <span>${noteText}</span>
      <button  class="deleteNote text-black-500">X</button>
  </div>`;

  $('#notesWrapper').append(noteElement);
  $('#inputNote').val('');
}

function updateTime() {
  setInterval(function () {
    let now = new Date();
    let date = now.toLocaleDateString('en-GB', { day: "numeric", month: "long", year: "numeric" });
    let time = now.toLocaleTimeString();
    $('#dateTxt').html(`${date} <br>  ${time}`)
  }, 1000);
};

$(document).on('click', '.deleteNote', function () {
  let note = $(this).closest('div');

  if (!note.hasClass('soft-deleted')) {

    note.addClass('soft-deleted').css('opacity', '0.5');
    $(this).text('🗑️');
  } else {

    note.remove();
  }
});
