import { Component } from '@angular/core';

@Component({
    selector: '<%= selector %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']
})
export class <%= classify(name) %>Component {
    <% if (name === 'svg-icon') { %>
        <% import('svg-icon/svg-icon.ts'); %>
    <% } %>
}
