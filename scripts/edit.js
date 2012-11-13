var enableRemove = true;
var events = new Object();

events.removeCard = function(event) {
    event.stopPropagation();
    if (enableRemove) {
        enableRemove = false;
        $(this).parent().makeInactive();
        var $target = $(this).parent();
        $target.slideUp( function() {
            $target.remove();
            renumberList();
            if ($(".cardRow").size() > 1) {
                enableRemove = true;
            }
        });
    }
};

events.selectCard = function() {
    if (!$(this).hasClass("selected")) {
        makeAllInactive();
        $(this).makeActive();
    }
}

events.enterCard = function() {
    if (enableRemove) {
        
        $(this).find(".removeCard").show();
    }
}

events.leaveCard = function() {
    $(this).find(".removeCard").hide();
}

$.fn.makeActive = function() {
    $(this).addClass("selected");
    var $front = $(this).find(".cardSummary").first();
    var $back = $(this).find(".cardSummary").eq(1);
    var frontText = $front.html();
    var backText = $back.html();
    $front.html("<textarea>" + frontText + "</textarea>");
    $back.html("<textarea>" + backText + "</textarea>");
    return $(this);
}

$.fn.makeInactive = function() {
    $(this).removeClass("selected");
    $(this).find(".cardSummary").eq(0).html($(this).find(".cardSummary").eq(0).find("textarea").first().val());
    $(this).find(".cardSummary").eq(1).html($(this).find(".cardSummary").eq(1).find("textarea").first().val());
    return $(this);
}

$.fn.cardCreate = function() {
    $(this).appendTo($(".cardList").first()).hide();
    $(this).hover(events.enterCard, events.leaveCard);
    $(this).click(events.selectCard);
    $(this).find(".removeCard").click(events.removeCard);
    return $(this);
}

// Make cardList element sortable
$(function() {
    $("#sortable").sortable({
        axis: "y",
        cursor: "move",
        placeholder: "placeholder",
        scroll: true,
        scrollSensitivity: 100,
        tolerance: 200,
        opacity: 0.7,
        stop: function() {
            renumberList();
        }
    });
});

// Other initialization
$(function() {
    // If there are less than 2 cards, don't allow user to remove remaining card
    if ($("#sortable").children().size() < 2) {
        enableRemove = false;
        $(".removeCard").hide();
    }
    
    // Make the first card active
    $(".cardRow").first().makeActive();
});

$(".cardRow").hover(events.enterCard, events.leaveCard);
$(".cardRow").click(events.selectCard);
$(".removeCard").click(events.removeCard);

$("#newCard").click( function() {
    addNewCard();
});

$("#saveDeck").click( function() {
    saveDeck();
});

$("#publishDeck").click( function() {
    publishDeck();
});

function renumberList() {
    $("#sortable").children().each( function() {
        $(this).find(".number").html($(this).index() + 1);
    });
    if ($("#sortable").children().size() > 1) {
        enableRemove = true;
    } else {
        enableRemove = false;
    }
}

function makeAllInactive() {
    $(".selected").makeInactive();
}

function addNewCard() {
    $(  '<div class="cardRow">' +
            '<div class="number">4</div>' +
            '<div class="minDisplay">' +
                '<div>' +
                    '<div class="bold">Front</div><br/>' +
                    '<div class="cardSummary"></div>' +
                '</div>' +
                '<div>' +
                    '<div class="bold">Back</div><br/>' +
                    '<div class="cardSummary"></div>' +
                '</div>' +
            '</div>' +
            '<div class="removeCard"></div>' +
        '</div>'
    ).cardCreate().slideDown( function() {
        makeAllInactive();
        $(this).makeActive();
    });
    renumberList();
}

function saveDeck() {
    // TODO
}

function publishDeck() {
    // TODO
}