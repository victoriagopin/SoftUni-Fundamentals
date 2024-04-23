import { getFruitById, updateFruit } from '../data/fruits.js';
import {html, render, page} from '../src/lib.js'
import { createSubmitHandler } from '../src/util.js';

const editTemplate = (fruit, onEdit) => html`
<section id="edit">
<div class="form">
  <h2>Edit Fruit</h2>
  <form class="edit-form" @submit=${onEdit}>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Fruit Name"
      .value=${fruit.name}
    />
    <input
      type="text"
      name="imageUrl"
      id="Fruit-image"
      placeholder="Fruit Image URL"
      .value=${fruit.imageUrl}
    />
    <textarea
      id="fruit-description"
      name="description"
      placeholder="Description"
      rows="10"
      cols="50"
    >${fruit.description}</textarea>
    <textarea
      id="fruit-nutrition"
      name="nutrition"
      placeholder="Nutrition"
      rows="10"
      cols="50"
    >${fruit.nutrition}</textarea>
    <button type="submit">post</button>
  </form>
</div>
</section>`;

export async function showEdit(ctx){
    const id = ctx.params.id;
    const fruit = await getFruitById(id);
    render(editTemplate(fruit, createSubmitHandler(onEdit)))

    async function onEdit({name, imageUrl, description, nutrition}){
        if(!name || !imageUrl || !description || !nutrition){
            return alert('All fields are required!');
        }
        await updateFruit(id, {name, imageUrl, description, nutrition});
        page.redirect('/catalog/' + id);
    }
}