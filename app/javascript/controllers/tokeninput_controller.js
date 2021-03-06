import $ from 'jquery';
import {
  Controller
} from 'stimulus';


export default class extends Controller {
  static targets = []

  connect() {
    $("#favlink_tag_tokens, #rblog_tag_tokens, #codebank_tag_tokens, #glossary_tag_tokens").tokenInput('/tags.json', {
      hintText: "태그를 입력하세요.",
      searchingText: "검색 중...",
      preventDuplicates: true,
      theme: 'facebook',
      prePopulate: $("#favlink_tag_tokens, #rblog_tag_tokens, #codebank_tag_tokens, #glossary_tag_tokens").data('load'),
      propertyToSearch: "name",
      resultsFormatter: function (tag) {
        return "<li>" + "<span class='fa fa-tag'></span> " + tag.name + "</div></li>";
      },
      tokenFormatter: function (tag) {
        return "<li><p>" + tag.name + "</p></li>";
      }
    });
  }
}