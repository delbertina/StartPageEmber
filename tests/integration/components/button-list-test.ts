import { module, test } from 'qunit';
import { setupRenderingTest } from 'delbertina-startpage/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ButtonList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ButtonList>
        template block text
      </ButtonList>
    `);

    assert.dom().hasText('template block text');
  });
});
